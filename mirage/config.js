export default function() {
  this.timing = 10;
  this.namespace = '/api/v1';

  const stubUrl = {
    url: {
      id: 1,
      original: 'http://www.google.ca',
      originalHash: '3a7b8655db26b70086cd4f443d306583',
      lengthened: 'de5db96b8c78294bcb5eb02025d9ea1835e25bdc75d72b4c039169e94890ca11',
      lengthenedHash: '3a7b8655db26b70086cd4f443d306583',
      lengthenedUrl: 'http://www.placeholder.com/r/de5db96b8c78294bcb5eb02025d9ea1835e25bdc75d72b4c039169e94890ca11'
    }
  };

  this.post('/urls', () => {
    return stubUrl;
  });

  this.patch('/urls', () => {
    return stubUrl;
  });
}
