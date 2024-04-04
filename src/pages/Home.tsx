const Home = () => {
  return (
    <div>
      <h2 className="text-white">The Home Route</h2>
      <p>
        This page is outside of the authenticated routes. If you are no longer
        authenticated then you will be redirected here.
      </p>
    </div>
  );
};

export default Home;
