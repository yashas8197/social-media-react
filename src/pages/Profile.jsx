import Header from '../components/Header'
import Footer from '../components/Footer'

const Profile = () => {
  const profile = {
    profilePhoto: 'https://placehold.co/150x150',
    userName: 'John Doe',
    department: 'Software Department',
    bio: 'Tech Enthusiast',
    followers: 1000,
    following: 500,
    posts: 50
  }
  
  return (
   <>
     <Header/>
     <main className='container d-flex my-4'>
    <div>
      <img className='rounded-circle' src={profile.profilePhoto}/>
    </div>
     <div className='ms-5'>
      <h1>{profile.userName}</h1>
      <p>{profile.department} | {profile.bio}</p>
       <p>Followers: {profile.followers}</p>
       <p>Following: {profile.following}</p>
       <p>Posts: {profile.posts}</p>
     </div>
       </main>
     <Footer/>
   </> 
  );
};

export default Profile;
