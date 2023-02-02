export const fetchResponse = (tokenResponse) => {
    return (
        fetch('https://graph.microsoft.com/beta/me', {
        headers: {
          Authorization: 'Bearer ' + tokenResponse.accessToken
        }
      }));
 
};