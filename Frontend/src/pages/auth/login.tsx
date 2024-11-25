import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="auth-page" style={{backgroundColor:'grey'}}>
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
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
                <div className="mt-3 text-center">
                  <p>
                    Dont have an account?{' '}
                    <Link legacyBehavior href="/auth/register">
                      <a className="text-primary">Register here</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

