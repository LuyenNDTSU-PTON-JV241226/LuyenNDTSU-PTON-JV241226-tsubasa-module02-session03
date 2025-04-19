import React from "react";
import CardDetail from "./CardDetail";
import ShoppingCartInfo from "./ShoppingCartInfo";

export default function ShoppingCart() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  {/* Phạm vi của Shopping card */}
                  <ShoppingCartInfo/>
                  {/* Phạm vi của card detail */}
                  <CardDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}