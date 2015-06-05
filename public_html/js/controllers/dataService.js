myApp.factory('dataService', function() {
    return {
        comments: [],
        remove: function(index) {
            comments.splice(index, 1);
        },
        edit: function(text, index) {
            comments[index].text = text;
        },
        add: function(name, text)
        {
            if (text !== undefined) {
                if (name !== undefined) {
                    name = name.trim();
                    if (name.length === 0) {
                        name = 'Anonimous';
                    }
                } else {
                    name = 'Anonimous';
                }
                comments.push({
                    text: $scope.text,
                    name: name,
                    time: new Date()
                });
            } else {
                alert('Type some comment');
            }
        }

    };
});