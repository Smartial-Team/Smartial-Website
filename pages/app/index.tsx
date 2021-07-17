import getTrainer from "../../backend/basicProfileService";
import Form from "../../components/appPage/form";

export default function App() {
  return (
    <>
      <div className="container">
        <Form />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(ctx) {
   const authenticated = await getTrainer(ctx.query.google_user_id);

   if (!authenticated.ok) {
     return {
       redirect: { destination: "/login", permanent: false },
     };
   }

   return { props: {} };
}
