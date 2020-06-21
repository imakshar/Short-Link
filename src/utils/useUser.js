import { useQuery } from "react-apollo";
import { AUTH_USER } from "../queries";

export default function () {
    const { data, error } = useQuery(AUTH_USER, {
        fetchPolicy: "cache-first",
    });
    if (!error && data?.auth_user) {
        return data.auth_user;
    }
    return null;
}
