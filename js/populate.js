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
  },
];

let body = d3.select('#listings');
const L = links.length > files.length ? links.length : files.length;
for (let i = 0; i < L; i++) {
  let row = body.append('tr');
  let link = row.append('td');
  if (links[i]) {
   link.append('a').attr('href', links[i].link).text(links[i].desc); 
  }
  if (files[i]) {
    row.append('td').text(files[i].desc);
    row.append('td').append('a').attr('href', files[i].link).text(files[i].link);
  }
}

