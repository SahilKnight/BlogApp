import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="auth-page" style={{backgroundColor:'black'}}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6 fade-in">
              <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4">Register</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
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
                    Register
                  </button>
                </form>
                <div className="mt-3 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link legacyBehavior href="/auth/login">
                      <a className="text-primary">Login here</a>
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
