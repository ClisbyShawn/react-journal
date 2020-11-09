import { toast } from "react-toastify";

function handleNetworkError(error) {
  //expected error vs. unexpected errors

  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 499;

  if (!expectedError) {
    toast.error(error);
    return;
  }

  const { name, message } = error.response.data;
  toast.warning(`${name}: ${message}`);
}

export default {
  handleNetworkError,
};
