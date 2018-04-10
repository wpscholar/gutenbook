(function (_, blocks, components, data, i18n, element) {

    var __ = i18n.__;
    var el = element.createElement;
    var RichText = blocks.RichText;

    blocks.registerBlockType('wpscholar/gutenbook', {
        title: __('Book', 'gutenbook'),
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
        edit: components.withState({
            focus: 'title',
        })(function (props) {
                return el(
                    'div',
                    {
                        className: props.className
                    },
                    [
                        el(
                            RichText,
                            {
                                key: 'title',
                                tagName: 'div',
                                className: 'wp-block-wpscholar-gutenbook__title',
                                keepPlaceholderOnFocus: true,
                                onChange: function (title) {
                                    props.setAttributes({title: title});
                                },
                                onFocus: function () {
                                    props.setState({focus: 'title'});
                                },
                                placeholder: __('Adventures of Huckleberry Finn', 'gutenbook'),
                                value: props.attributes.title,
                                isSelected: props.isSelected && 'title' === props.focus
                            },
                            props.attributes.title
                        ),
                        el(
                            RichText,
                            {
                                key: 'description',
                                tagName: 'div',
                                className: 'wp-block-wpscholar-gutenbook__description',
                                keepPlaceholderOnFocus: true,
                                multiline: 'p',
                                onChange: function (description) {
                                    props.setAttributes({description: description});
                                },
                                onFocus: function () {
                                    props.setState({focus: 'description'});
                                },
                                placeholder: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'gutenbook'),
                                value: props.attributes.description,
                                isSelected: props.isSelected && 'description' === props.focus
                            },
                            props.attributes.description
                        ),
                        el(
                            RichText,
                            {
                                key: 'author',
                                tagName: 'div',
                                className: 'wp-block-wpscholar-gutenbook__author',
                                keepPlaceholderOnFocus: true,
                                onChange: function (author) {
                                    props.setAttributes({author: author});
                                },
                                onFocus: function () {
                                    props.setState({focus: 'author'});
                                },
                                placeholder: __('Mark Twain', 'gutenbook'),
                                value: props.attributes.author,
                                isSelected: props.isSelected && 'author' === props.focus
                            },
                            props.attributes.author
                        ),
                    ]
                );
            }
        ),
        save: function (props) {
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

})(
    window._,
    window.wp.blocks,
    window.wp.components,
    window.wp.data,
    window.wp.i18n,
    window.wp.element
);