import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Modal from "../../../components/Modals";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type CourierInfo = {
  fullname: string;
  no_hp: string;
  courier_info: {
    balance: number;
  };
  email: string;
};

type Deposit = {
  _id: string;
  date: string;
  bukti_transfer: string;
  courier_id: CourierInfo;
  status: boolean;
  reference_id: number;
  amount: number;
};

type ModalData = {
  name: string;
  id: string;
  bukti_transfer: string;
  status: boolean;
  ref_id: number;
};
interface BodyPost {
  id: string;
  wallet: string;
}

const CourierDeposits = ({
  deposits,
  depositDone,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let [data, setData] = useState<ModalData>({
    name: "",
    id: "",
    bukti_transfer: "",
    status: false,
    ref_id: 0,
  });




  let [rp, setRp] = useState<string>("");

  const formatRupiah = (angka: string, prefix: string): string => {
    setRp(angka.slice(4).replaceAll(".", ""));

    var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    var separator;

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  }

  let [wallet, setWallet] = useState<string>("");

  const submit = async (e) => {
    e.preventDefault();

    let body: BodyPost = {
      id: data.id,
      wallet: rp,
    };

    console.log(body);

    await fetch("http://192.168.43.178:8000/accept/request/wallet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 12313123",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <Layout title="Courier Deposit">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header">
                <h4 className="card-title">
                  List kurir yg request untuk isi Wallet
                </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table tablesorter" id="">
                    <thead className="text-primary">
                      <tr>
                        {deposits.length === 0 ? (
                          <th className="text-center">No Data Available</th>
                        ) : (
                            <>
                              <th>Nama</th>
                              <th>Wallet (Rp.)</th>
                              <th>Status</th>
                              <th>Kode Unik</th>
                              <th>Tanggal</th>
                              <th>Bukti Transfer</th>
                              <th className="text-center">Action</th>
                            </>
                          )}
                      </tr>
                    </thead>
                    <tbody>
                      {deposits.length === 0 ? (
                        <tr>
                          <td className="text-center">
                            -tidak ada data request isi wallet-
                          </td>
                        </tr>
                      ) : (
                          deposits.map((v, i) => {
                            return (
                              <tr key={i}>
                                <td>{v.courier_id.fullname}</td>
                                <td>{v.courier_id.courier_info.balance}</td>
                                <td>
                                  {v.status
                                    ? "sudah di verifikasi"
                                    : "menunggu di verifikasi"}
                                </td>
                                <td>{v.reference_id}</td>
                                <td>{v.date}</td>
                                <td>{v.bukti_transfer ? "ada" : "kosong"}</td>

                                <td className="text-center">
                                  <button
                                    onClick={() =>
                                      setData({
                                        name: v.courier_id.fullname,
                                        bukti_transfer: v.bukti_transfer,
                                        id: v._id,
                                        status: v.status,
                                        ref_id: v.reference_id,
                                      })
                                    }
                                    className="action-view-button"
                                    data-toggle="modal"
                                    data-target={`#viewDepositDetail`}
                                  >
                                    View
                                </button>
                                  <button className="action-reject-button">
                                    Reject
                                </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card  card-plain">
              <div className="card-header">
                <h4 className="card-title">
                  List deposit yang sudah di terima
                </h4>
                <p className="category">a</p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table tablesorter " id="">
                    <thead className=" text-primary">
                      <tr>
                        {depositDone.length === 0 ? (
                          <th className="text-center">No Data Available</th>
                        ) : (
                            <>
                              <th>Nama</th>
                              <th>Wallet (Rp.)</th>
                              <th>Status</th>
                              <th>Ref ID</th>
                              <th>Bukti Transfer</th>
                            </>
                          )}
                      </tr>
                    </thead>
                    <tbody>
                      {depositDone.length === 0 ? (
                        <tr>
                          <td className="text-center">
                            -tidak ada data request wallet yg sudah di accept-
                          </td>
                        </tr>
                      ) : (
                          depositDone.map((v, i) => {
                            return (
                              <tr key={i}>
                                <td>{v.courier_id.fullname}</td>
                                <td>{v.amount}</td>
                                <td>
                                  {v.status
                                    ? "sudah di verifikasi"
                                    : "menunggu di verifikasi"}
                                </td>
                                <td>{v.reference_id}</td>
                                <td className="text-center">
                                  <button
                                    onClick={() => (window.location.href = v.bukti_transfer)}
                                    className="action-view-button"
                                  >
                                    View
                                </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal id="viewDepositDetail" headerName="Detail">
        <div className="modal-view-deposit">
          <form
            onSubmit={(e) => submit(e)}
            method="POST"
            className="modal-deposit-content-wrapper"
          >
            <div className="bukti-tf-wrapper">
              <span className="bukti-tf-text">Foto Bukti Transfer</span>
              <span>Note* klik gambar untuk memperbesar</span>
              <img
                onClick={() => (window.location.href = data.bukti_transfer)}
                src={data.bukti_transfer}
              />
            </div>
            <div className="sender-info">
              <span className="sender-info-text">From : {data.name}</span>
              <span className="sender-info-text">
                Status :{" "}
                {data.status ? "sudah di verifikasi" : "belum di verifikasi"}
              </span>
              <span className="sender-info-text">Kode UNIK : {data.ref_id}</span>

              <div style={{ paddingTop: 20, display: "block" }}>
                <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <span>
                    Note* : Isi input wallet sesuai dengan uang transfer si
                    depositor, dan klik Isi Wallet untuk mengkonfirmasi
                    sekaligus mengisi wallet si depositor
                  </span>
                </div>
                <input
                  type="text"
                  style={{ display: "block" }}
                  placeholder="Isi Nominal Disini..."
                  value={wallet}
                  onChange={(v: React.ChangeEvent<HTMLInputElement>): void =>
                    setWallet(formatRupiah(v.target.value, "Rp. "))
                  }
                />
                <button type="submit">Isi Wallet</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://192.168.43.178:8000/all/request/topup/wallet`,
    {
      method: "GET",
    }
  );
  const res1 = await fetch(
    `http://192.168.43.178:8000/all/done/request/topup/wallet`,
    {
      method: "GET",
    }
  );

  const deposits: Deposit[] = await res.json();
  const depositDone: Deposit[] = await res1.json();

  return {
    props: {
      deposits,
      depositDone,
    },
    revalidate: 1
  };
};

export default CourierDeposits;
