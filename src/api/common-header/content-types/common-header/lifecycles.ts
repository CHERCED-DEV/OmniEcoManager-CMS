const COMMON_API = `${process.env.HOST_APIS}/common/strapi`;

export default {
  beforeUpdate(event) {
    const { data } = event.params;

    fetch(COMMON_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        'Authorization': `Bearer ${process.env.JWT_SECRET}`,
      },
      body: JSON.stringify({
        api: 'common-header',
        event: 'update',
        updated_object: data,
    }),
    })
    .catch(error => {
      console.error('Error sending notification:', error);
    });

    return event.params;
  },
};
