import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		const { __NEXT_DATA__ } = this.props;

		return (
			<Html
				lang={__NEXT_DATA__.locale}
				dir={this.props.locale === 'ar' ? 'rtl' : 'ltr'}
			>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
