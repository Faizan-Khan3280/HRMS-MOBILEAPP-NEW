
export const login = async (email, password, domain) => {
    const response = await fetch(`https://www.hrmsmaster.com/api/login`, {
        method: 'GET',
        params: {
        username: email,
        password: password,
        subdomain: domain
        }
    });

    return response;
}
