const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMe_header">
        <header className="AboutMe_title">Howdy Friends!</header>
        <div className="AboutMe_subtitle">
          Welcome to my personal recipe blog :D
        </div>
      </div>
      <div className="AboutMe_details">
        <img
          src="https://images.pexels.com/photos/4781434/pexels-photo-4781434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="the-author"
          className="AboutMe_image"
        ></img>
        <p>
          I'm a very cool chick. I love to cook and I love to bake and I love to
          share meals with my friends and family! Like Madeline and her friends
          once said, 'We love our bread, we love our butter, but most of all we
          love eachother'. That's how I feel about bread, butter, and those
          closest to me. Sign up for my newsletter to be notified when a new
          recipe drops!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
