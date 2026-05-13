const { Client } = require('@hubspot/api-client');

async function testIntegration() {
  const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!hubspotAccessToken || !contactEmail) {
    console.error('Error: Missing environment variables. Please ensure HUBSPOT_ACCESS_TOKEN, and CONTACT_EMAIL are set.');
    process.exit(1);
  }

  console.log('\nTesting HubSpot...');
  try {
    const hubspotClient = new Client({ accessToken: hubspotAccessToken });
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com',
      },
    });
    console.log('HubSpot test successful! (Check your HubSpot CRM for a new contact named "Test User")');
  } catch (error) {
    console.error('HubSpot test failed:', error);
  }
}

testIntegration();
