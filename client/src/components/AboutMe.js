const AboutMe = () => {
  return (
    <div className="about-me">
      <div>
        <header className="about-me-header">Howdy Friends!</header>
        <span className="about-me-subheader">
          And welcome to my personal recipe blog :-)
        </span>
      </div>
      <img
        src="https://images.pexels.com/photos/4781434/pexels-photo-4781434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="the-author"
        className="about-me-image"
      ></img>
      <div>
        <p className="about-me-p">
          I'm a very cool chick. I love to cook and I love to bake and I love to
          share meals with my friends and family! Like Madeleine and her cronies
          once said, 'We love our bread, we love our butter, but most of all we
          love eachother'. That's how I feel about bread, butter, and those
          closest to me. Sign up for my newsletter if you want to be notified
          when a new recipe drops!
        </p>
      </div>
      {/* <footer>2022 © Rebecca Beard</footer> */}
    </div>
  );
};

export default AboutMe;
