module.exports = () => ({
    email: {
        config: {
          provider: 'strapi-provider-email-brevo',
          providerOptions: {
            apiKey: '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',
          },
          settings: {
            defaultSenderEmail: 'abdulmananali46@gmail.com',
            defaultSenderName: 'Manan',
            defaultReplyTo: 'email@email.com',
          },
        },
      }
});
