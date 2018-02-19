var el = wp.element.createElement,
    registerBlockType = wp.blocks.registerBlockType,
    Editable = wp.blocks.Editable;

registerBlockType('wpscholar/gutenbook', {
    title: 'Book',
    icon: 'book-alt',
    category: 'layout',
    attributes: {
        title: {
            type: 'text',
            selector: 'div.wp-block-wpscholar-gutenbook__title',
        },
        description: {
            type: 'html',
            source: 'children',
            selector: 'div.wp-block-wpscholar-gutenbook__description',
        },
        author: {
            type: 'text',
            selector: 'div.wp-block-wpscholar-gutenbook__author',
        }
    },
    edit: function (props) {
        return el(
            'div',
            {
                className: props.className
            },
            [
                el(
                    Editable,
                    {
                        key: 'title',
                        tagName: 'div',
                        className: props.className + '__title',
                        onChange: function (title) {
                            props.setAttributes({title: title});
                        },
                        placeholder: 'Adventures of Huckleberry Finn',
                        value: props.attributes.title,
                        isSelected: props.isSelected
                    },
                    props.attributes.title
                ),
                el(
                    Editable,
                    {
                        key: 'description',
                        tagName: 'div',
                        className: props.className + '__description',
                        multiline: 'p',
                        onChange: function (description) {
                            props.setAttributes({description: description});
                        },
                        placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        value: props.attributes.description,
                        isSelected: props.isSelected
                    },
                    props.attributes.description
                ),
                el(
                    Editable,
                    {
                        key: 'author',
                        tagName: 'div',
                        className: props.className + '__author',
                        onChange: function (author) {
                            props.setAttributes({author: author});
                        },
                        placeholder: 'Mark Twain',
                        value: props.attributes.author,
                        isSelected: props.isSelected
                    },
                    props.attributes.author
                ),
            ]
        );
    },
    save: function (props) {
        props.className = 'wp-block-wpscholar-gutenbook';
        return el(
            'div',
            {},
            [
                el(
                    'div',
                    {
                        key: 'title',
                        className: 'wp-block-wpscholar-gutenbook__title'
                    },
                    props.attributes.title
                ),
                el(
                    'div',
                    {
                        key: 'description',
                        className: 'wp-block-wpscholar-gutenbook__description'
                    },
                    props.attributes.description
                ),
                el(
                    'div',
                    {
                        key: 'author',
                        className: 'wp-block-wpscholar-gutenbook__author'
                    },
                    props.attributes.author
                ),
            ]
        );
    },
});