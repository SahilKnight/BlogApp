import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Blog/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      <Navbar /> 
      <div className="hero-section text-center py-5">
        <h1 className="display-3 fade-in">Welcome to the Blog App</h1>
        <p className="lead fade-in">Your hub for amazing blogs and stories!</p>
      </div>
      <div className="container py-5">
        <div className="row">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="col-md-4 mb-4 fade-in">
              <div className="card shadow-sm">
                <img
                  src={`https://picsum.photos/200${index + 1}`}
                  className="card-img-top"
                  style={{ width: '500px', height: '300px' }}
                  alt={`Blog ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">Title {index + 1}</h5>
                  <p className="card-text">
                    Fitness blogs are specialized sites most often created by certified fitness trainers, healthy living enthusiasts, or simply fitness influencers. It is blogs that make health and fitness professionals share their insights, experiences and expert advice with a wider audience.

                    Health and fitness professionals blogs serve as an important resource for those looking to improve their physical well-being. Good blogs offer everything:

                    workout tips,
                    nutrition tips,
                    reviews of the latest fitness trends,
                    advice on equipment,
                    information on fitness challenges,
                    fitness inspiration.  {index + 1}. Read more to find out
                    what it's all about!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
