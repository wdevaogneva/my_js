module.exports = {

	mode: 'production',
	//файл, в котором подключаются все модули
  entry: './js/bundle/script.js',
  output: {
  	path: __dirname + "/js/bundle",
  	//выходной файл, в котором соберутся все модули
    filename: 'bundle_webpack.js',
    //переменная в которую запишется вся сборка
    library: 'myApp'
  }
};