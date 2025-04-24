import PageTitle from "../../components/PageTitle/PageTitle";
import { Container, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.homePage}>
      <Container maxWidth="md">
        <PageTitle>Welcome to Your Phone Book</PageTitle>

        <Typography variant="h5" component="h3" gutterBottom>
          Your personal space for storing contacts
        </Typography>

        <Typography variant="body1" paragraph>
          Sign up now to start organizing and saving your contacts effortlessly!
        </Typography>

        {!isLoggedIn && (
          <Button
            variant="contained"
            color="primary"
            href="/register"
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        )}
      </Container>
    </div>
  );
};

export default HomePage;

// import PageTitle from "../../components/PageTitle/PageTitle";

// const HomePage = () => {
//   return (
//     <div>
//       <PageTitle>Welcome to Your Phone Book</PageTitle>
//       <h3>Your personal space for storing contacts</h3>
//       <p>
//         Sign up now to start organizing and saving your contacts effortlessly!
//       </p>
//     </div>
//   );
// };

// export default HomePage;
