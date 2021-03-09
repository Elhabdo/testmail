'use strict'
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  send: async (ctx) => {
    if (ctx.is('multipart')) {
      console.log("ana")
      
        const { data, files } = parseMultipartData(ctx);
        console.log(data);
        console.log(files);
    var fiile = [{
      filename: files.file1.name,
      path: files.file1.path
  },{
    filename: files.file2.name,
    path: files.file2.path
}]
    try {
      const emailOptions = {
        to: "abdelmounaimelhaila@gmail.com",
        subject: 'Welcome to mnc newsletter',
        html: `Vous trouvez ci joint nchaalah chi haja`,
        attachments : fiile
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to admin`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      strapi.log.error(`Error sending email to admin`, err)
      ctx.send({ error: 'Error sending email' })
    }
  }
  else {
    console.log("no file")
  }
    return "test"
  },
}