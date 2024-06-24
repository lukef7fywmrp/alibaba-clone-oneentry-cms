import LoginForm from "@/components/LoginForm";
import getAPI from "@/oneentry";

async function LoginPage() {
  const loginForm = await getAPI().Forms.getFormByMarker("signin", "en_US");

  console.log("loginForm", loginForm);

  return <LoginForm formEntity={loginForm} />;
}

export default LoginPage;
