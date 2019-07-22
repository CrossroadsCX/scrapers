const fs = require('fs')
const path = require('path')
const request = require('request')

const downloadFile = async (
  uri,
  filename = 'download.txt',
  directory
) => {
  const directoryPath = directory ? directory : path.resolve(__dirname, '../../tmp')
  const filePath = path.resolve(directoryPath, filename);

  let file = fs.createWriteStream(filePath);
  const stream = request({ uri })
    .pipe(file)
    .on('finish', () => {
      return true;
    }).on('error', (err) => {
      throw error;
    })

  return filePath
}

module.exports = downloadFile
