export const getAccessToken = async (): Promise<string> => {
  const tenantId = '49c79685-7e11-437a-bb25-eba58fc041f5';
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const formData = new URLSearchParams();
  formData.append('grant_type', 'client_credentials');

  console.log('Client Scope:', process.env.GEBERIT_CLIENT_SCOPE);
  formData.append('scope', process.env.GEBERIT_CLIENT_SCOPE!);

  console.log('Client ID:', process.env.GEBERIT_CLIENT_ID);
  formData.append('client_id', process.env.GEBERIT_CLIENT_ID!);

  console.log('Client Secret:', process.env.GEBERIT_CLIENT_SECRET);
  formData.append('client_secret', process.env.GEBERIT_CLIENT_SECRET!);

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      Accept: '*/*',
      'User-Agent': 'PostmanRuntime/7.37.3',
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Token request failed:', errorText);
    throw new Error(`Failed to obtain access token: ${response.status}`);
  }

  const data = await response.json();
  console.log('RETRIEVED Access Token:', data.access_token);
  return data.access_token;
};
