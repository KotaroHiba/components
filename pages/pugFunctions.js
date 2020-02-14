/**
 * @author Kotaro
 * @type {{
 * helper(object): object,
 * addClasses(string, object, arrow): string,
 * }}
 */
module.exports = {
// TODO @Kotaro нужно продумать как сделать состояния через функцию
    addClasses(blockName, options, addState) {
        let classes = '';
        classes += options.element ? ' ' + options.element + '__' + blockName : '';
        classes += options.mode ? ' ' + blockName + '_' + options.mode : '';
        classes += options.addAnyClass ? ' ' + options.addAnyClass : '';
        if (addState) {
            for (let i = 0; i < addState.length; i++) {
                if (addState[i]) {
                    classes += blockName + addState[i];
                }

            }
        }
        return classes;
    },

    // TODO @Kotaro возвращает параметры которые нужно передать
    helper(data) {
        let obj = {element: ''};
        obj += data ? data : '';
        return obj;
    },
    // TODO @Kotaro описывает суть блока,
    log() {
        return console.log('Hello wolrd')
    },

}
;