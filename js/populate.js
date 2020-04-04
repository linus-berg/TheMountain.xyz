const links = [
  {
    desc: 'Twitter',
    link: 'https://twitter.com/linusberg_'
  },
  {
    desc: 'Github',
    link: 'https://github.com/linus-berg'
  },
  {
    desc: 'LinkedIn',
    link: 'https://www.linkedin.com/in/linus-berg-488b49121/',
  }
];
    
const files = [
  {
    desc: 'Extended CV',
    link: './files/CV.pdf'
  }
];

let body = d3.select('#link-table tbody');
links.forEach(function(d, i) {
  let row = body.append('tr');
  row.append('td').append('a').attr('href', d.link).text(d.desc);
});

body = d3.select('#file-table tbody');
files.forEach(function(d, i) {
  let row = body.append('tr');
  row.append('td').text(d.desc);
  row.append('td').append('a').attr('href', d.link).text(d.link);
});
