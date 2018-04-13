import './style.scss';
import './editor.scss';

const { registerBlockType, RichText } = wp.blocks;
const { withState } = wp.components;
const { __ } = wp.i18n;

const placeholders = {
	author: __( 'Mark Twain', 'gutenbook' ),
	description: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'gutenbook' ),
	title: __( 'Adventures of Huckleberry Finn', 'gutenbook' ),
};

/**
 * Register our Gutenbook block
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 *
 * @param  {string} name Block name.
 * @param  {Object} settings Block settings.
 *
 * @return {?WP_Block} The block, if it has been successfully registered; otherwise `undefined`.
 */
registerBlockType( 'wpscholar/gutenbook', {

	title: __( 'Gutenbook', 'gutenbook' ),

	icon: 'book-alt',

	category: 'layout',

	keywords: [
		__( 'Gutenbook', 'gutenbook' ),
	],

	attributes: {
		title: {
			type: 'text',
			selector: '.wp-block-wpscholar-gutenbook__title',
		},
		description: {
			type: 'html',
			source: 'children',
			selector: '.wp-block-wpscholar-gutenbook__description',
		},
		author: {
			type: 'text',
			selector: '.wp-block-wpscholar-gutenbook__author',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props for edit component.
	 * @returns {string} Rendered markup.
	 */
	edit: withState( { focus: 'title' } )(
		function( { attributes: { author = '', description = '', title = '' }, className, focus, isSelected, setAttributes, setState } ) {
			return (
				<div className={className}>
					<RichText
						className="wp-block-wpscholar-gutenbook__title"
						keepPlaceholderOnFocus={true}
						key="title"
						onChange={title => setAttributes( { title } )}
						onFocus={() => setState( { focus: 'title' } )}
						placeholder={placeholders.title}
						value={title}
						isSelected={isSelected && focus === 'title'}
					/>
					<RichText
						className="wp-block-wpscholar-gutenbook__description"
						keepPlaceholderOnFocus={true}
						key="description"
						multiline="p"
						onChange={description => setAttributes( { description } )}
						onFocus={() => setState( { focus: 'description' } )}
						placeholder={placeholders.description}
						value={description}
						isSelected={isSelected && focus === 'description'}
					/>
					<RichText
						className="wp-block-wpscholar-gutenbook__author"
						keepPlaceholderOnFocus={true}
						key="author"
						onChange={author => setAttributes( { author } )}
						onFocus={() => setState( { focus: 'author' } )}
						placeholder={placeholders.author}
						value={author}
						isSelected={isSelected && focus === 'author'}
					/>
				</div>
			);
		}
	),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props for edit component.
	 * @returns {string} Rendered markup.
	 */
	save: function( { attributes: { author, description, title } } ) {
		return (
			<div>
				<div className="wp-block-wpscholar-gutenbook__title" key="title">{title}</div>
				<div className="wp-block-wpscholar-gutenbook__description" key="description">{description}</div>
				<div className="wp-block-wpscholar-gutenbook__author" key="author">{author}</div>
			</div>
		);
	},

} );
