import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PostDetails = () => {
  const { postId } = useParams();
  console.log(postId);

  const userData = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: "Jane Smith",
      bio: "Graphic Designer | Nature Lover",
      imageUrl: "https://via.placeholder.com/250",
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: "Alice Wonder",
      bio: "Travel Blogger | Foodie",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const postData = userData[postId];
  console.log(postData);

  return (
    <>
      <Header />
      <main className="container py-4 d-flex">
        <div>
          <img src={postData.imageUrl} />
        </div>
        <div className="ms-5">
          <h2>{postData.fullName}</h2>
          <p>@{postId}</p>
          <p>{postData.bio}</p>
          <p>Followers: {postData.followers}</p>
          <p>Followings: {postData.following}</p>
          <p>Posts: {postData.posts}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostDetails;
