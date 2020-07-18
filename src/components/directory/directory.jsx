import React from 'react';
import { sections } from './sections';
import MenuItems from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections,
		};
	}
	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...otherMenuProps}) => (
					<MenuItems key={id} {...otherMenuProps} />
				))}
			</div>
		);
	}
}

export default Directory;
