import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5; /* Light background color */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333; /* Darker color for contrast */
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #333; /* Darker color for contrast */
  margin: 20px 0 10px;
  text-align: center;
`;

const TopicButton = styled.button`
  background: #007bff; /* Bootstrap primary color */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3; /* Darker shade on hover */
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between grid items */
  width: 100%;
  max-width: 1000px; /* Max width for the grid */
`;

const VideoWrapper = styled.div`
  background: #fff; /* White background for video container */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow: hidden; /* Prevents overflow of child elements */
  transition: transform 0.2s; /* Animation on hover */

  &:hover {
    transform: scale(1.02); /* Slight zoom effect on hover */
  }

  h4 {
    margin: 10px; /* Margin around title */
    font-size: 1.2rem; /* Title font size */
    text-align: center; /* Center align title */
    color: #555; /* Title color */
  }

  iframe {
    width: 100%;
    height: 200px; /* Height for videos */
    border: none; /* Remove default border */
  }
`;

const Tutorials = () => {
  const tutorials = {
    Cardio: [
      { id: '548WdMCpkS0', title: 'Cardio Workouts: HIIT for Beginners', channel: 'Channel Name', link: 'https://youtu.be/548WdMCpkS0' },
      { id: 'HP_P-A3crw4', title: '30-Minute Cardio Dance Workout', channel: 'Channel Name', link: 'https://youtu.be/HP_P-A3crw4' },
    ],
    Athletics: [
      { id: '9l0VST9D128', title: 'Athletics Training: Sprinting Technique', channel: 'Channel Name', link: 'https://youtu.be/9l0VST9D128' },
      { id: '3Du0OiBJz0Y', title: 'Long Jump Technique: Step by Step', channel: 'Channel Name', link: 'https://youtu.be/3Du0OiBJz0Y' },
    ],
    Cycling: [
      { id: 'VIDEO_ID_1', title: 'Cycling Techniques for Beginners', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_1' },
      { id: 'VIDEO_ID_2', title: 'Top 10 Cycling Tips', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_2' },
    ],
    Gymnastics: [
      { id: 'VIDEO_ID_3', title: 'Basic Gymnastics Skills', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_3' },
      { id: 'VIDEO_ID_4', title: 'Gymnastics Conditioning Exercises', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_4' },
    ],
    Karate: [
      { id: 'VIDEO_ID_5', title: 'Karate Basics for Beginners', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_5' },
      { id: 'VIDEO_ID_6', title: 'Advanced Karate Techniques', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_6' },
    ],
    Taekwondo: [
      { id: 'VIDEO_ID_7', title: 'Taekwondo Sparring Techniques', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_7' },
      { id: 'VIDEO_ID_8', title: 'Learn Taekwondo: Basic Kicks', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_8' },
    ],
    Boxing: [
      { id: 'VIDEO_ID_9', title: 'Boxing Techniques for Beginners', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_9' },
      { id: 'VIDEO_ID_10', title: 'Advanced Boxing Drills', channel: 'Channel Name', link: 'https://youtu.be/VIDEO_ID_10' },
    ],
  };

  return (
    <Container>
      <Title>Tutorials</Title>
      {Object.keys(tutorials).map((topic) => (
        <div key={topic}>
          <SectionTitle>{topic}</SectionTitle>
          <TopicButton onClick={() => window.scrollTo(0, document.getElementById(topic).offsetTop)}>
            View {topic} Videos
          </TopicButton>
          <VideoGrid id={topic}>
            {tutorials[topic].map((video) => (
              <VideoWrapper key={video.id}>
                <h4>{video.title}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allowFullScreen
                />
                <p>Channel: {video.channel}</p>
                <a href={video.link} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
              </VideoWrapper>
            ))}
          </VideoGrid>
        </div>
      ))}
    </Container>
  );
};

export default Tutorials;
