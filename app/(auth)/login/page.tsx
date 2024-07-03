import LoginForm from "@/components/LoginForm";
import api from "@/oneentry";

async function LoginPage() {
  const loginForm = await api.Forms.getFormByMarker("signin");

  return <LoginForm formEntity={loginForm} />;
}

export default LoginPage;
