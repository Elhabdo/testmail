module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 9252),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '84345cfdf1952a5768a120dd89d4a1cf'),
    },
  },
});
