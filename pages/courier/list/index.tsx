import React from "react";
import Layout from "../../../components/Layout";
import { InferGetStaticPropsType } from "next";
import { SERVER_URL } from "../../../utils/constants";

type Courier = {
  fullname: string;
  alamat: string;
  foto_ktp: string;
  active_order: string;
  email: string;
  foto_diri: string;
  foto_stnk: string;
  courier_info: {
    balance: number;
    status: boolean;
  };
};

const CourierList = ({
  courier,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Courier Lists">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header">
                <h4 className="card-title">Courier Lists</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table tablesorter" id="">
                    <thead className="text-primary">
                      <tr>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Order Aktif</th>
                        <th>Foto Diri</th>
                        <th>Foto KTP</th>
                        <th>Foto STNK</th>
                        <th>Busy</th>
                        <th>Wallet</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courier.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td>{v.fullname}</td>
                            <td>{v.email}</td>
                            <td>{v.active_order ? "ada" : "tidak ada"}</td>
                            <td className="text-center">
                              <button
                                onClick={() => (window.location.href = v.foto_diri)}
                                className="action-view-button"
                              >
                                Lihat
                                </button>
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() => (window.location.href = v.foto_ktp)}
                                className="action-view-button"
                              >
                                Lihat
                                </button>
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() => (window.location.href = v.foto_stnk)}
                                className="action-view-button"
                              >
                                Lihat
                                </button>
                            </td>
                            <td>{v.courier_info.status ? "iya" : "tidak"}</td>
                            <td>Rp.{v.courier_info.balance},-</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${SERVER_URL}/user/type/courier`, {
    method: "GET",
  });
  const courier: Courier[] = await res.json();

  return {
    props: {
      courier,
    },
  };
};

export default CourierList;
