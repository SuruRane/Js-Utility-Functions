# merge two arrays#
Array.prototype.merge = (array)->
	originalArr = @
	array.forEach (value)->
		originalArr.push value
#check if two objects are equal#
Object.prototype.isEqual = (obj)->
	originalObj = @
	if Object.keys(originalObj).length isnt Object.keys(obj).length
		return false
	for key, value of originalObj
		if originalObj[key] isnt obj[key]
			return false
	return true
#truncate a string#
String.prototype.truncateChars = (len)->
	originalStr = @
	return originalStr.substr(0,len)
#remove element from array#
Array.prototype.removeElement = (ele)->
	originalArr = @
	index = originalArr.indexOf(ele)
	return originalArr.splice(index,1)

#check if two arrays are euqal#
Array.prototype.isEqual = (array)->
	originalArr = @
	if originalArr.length isnt array.length
		return false

	for i,index in originalArr
		if originalArr[index] isnt array[index]
			return false
	return true
			

#search for a query parameter in the url#
window.location.searchQuery = (parameter)->

	urlParams = window.location.search.split('?')[1].split('&')

	queryParams = {}
	$.each urlParams,(index,value)->
		equalToSplit = value.split('=')
		queryParams[equalToSplit[0]] = equalToSplit[1]

		if Object.keys(queryParams).length > 0
			return queryParams[parameter]

	return false
	
		
	










