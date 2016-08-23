'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/what-would-you-like-to-do'
  },
  '/what-would-you-like-to-do': {
    fields: [
      'start-options'
    ],
    template: 'what-would-you-like-to-do',
    forks: [{
      target: '/what-would-you-like-to-do',
      condition: (req, res) => {
        if (req.form.values['start-options'] === 'apply') {
          res.redirect('/apply');
        }
      }
    },
    {
      target: '/what-would-you-like-to-do',
      condition: (req, res) => {
        if (req.form.values['start-options'] === 'update') {
          res.redirect('/find-your-application');
        }
      }
    }]
  }
};
