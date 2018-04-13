import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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

	title: __( 'Gutenbook' ),

	icon: 'shield',

	category: 'common',

	keywords: [
		__( 'Gutenbook' ),
	],

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
	edit: function( props ) {
		return (
			<div className={props.className}>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>gutenbook</code> is a new Gutenberg block
				</p>
				<p>
					It was created via
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

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
	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>gutenbook</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

} );
