import React from 'react';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 fade-in">
            <div className="card shadow-lg p-4">
              <h2 className="text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
