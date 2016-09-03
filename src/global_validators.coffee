## add custom validator methods ##
JsValidators = ()->

JsValidators.prototype.checkPhoneLength = (string)->
	regex = /^\d{10,12}$/ 
	return regex.test(string)

JsValidators.prototype.isEmpty = (string)-> 
    if string and not string.trim()
        return true
    return false

JsValidators.prototype.checkPastDate = (date_value)->
	today = new Date()
	#formatted today's date#
	date = today.getDate()
	month = today.getMonth()
	if today.getDate() < 10
		date = '0'+today.getDate()
	if today.getMonth() < 10
		month = '0'+today.getMonth()
	formatted_today = today.getFullYear()+'-'+month+'-'+date
	#formatted today's date#
	#formatted passed date#
	new_date = new Date(date_value)
	date = new_date.getDate()
	month = new_date.getMonth()
	if new_date.getDate() < 10
		date = '0'+new_date.getDate()
	if new_date.getMonth() < 10
		month = '0'+new_date.getMonth()
	formatted_new_date = new_date.getFullYear()+'-'+month+'-'+date
	#formatted passed date#

	if formatted_new_date < formatted_today
		return false
	else
		return true


@jsvalidators = new JsValidators()
## add custom validator methods ##


