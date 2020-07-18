import React, { Component } from 'react';
import { shopData } from './2.2 shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Shop extends Component {
	constructor() {
		super();

		this.state = {
			collections: shopData,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherProps }) => (
					<CollectionPreview key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default Shop;
