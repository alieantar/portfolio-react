function AboutMe(props) {
  return (
    <div className="about-me-container">
      <p className="about-me-text">
        {props.aboutMeContent}
      </p>
    </div>
  );
}

export default AboutMe;