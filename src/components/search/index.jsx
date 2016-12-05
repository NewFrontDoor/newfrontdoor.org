import React, {PropTypes} from 'react';
import styles from './Search.scss';

class Search extends React.Component {
	constructor() {
		super();

		this.setSearchInputRef = this.setSearchInputRef.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	get searchInputRef() {
		return this._searchInputRef;
	}

	setSearchInputRef(ref) {
		this._searchInputRef = ref;
	}

	componentDidMount() {
		if (window.matchMedia('(min-width: 992px)').matches) {
			this.searchInputRef.focus();
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		this.searchInputRef.blur();
		this.props.onSearchSubmit(this.searchInputRef.value);
	}

	render() {
		let inputGroup = 'input-group';
		const {inputClass, buttonClass, size, placeholder} = this.props;

		if (size === 'large') {
			inputGroup += ' input-group-lg';
		}

		return (
			<form onSubmit={this.handleSubmit}>
				<div className={inputGroup}>
					<label className="sr-only" htmlFor="search">Search</label>
					<input
						type="search"
						name="search"
						ref={this.setSearchInputRef}
						className={`form-control ${inputClass}`}
						placeholder={placeholder}
						/>
					<span className={`input-group-btn ${inputClass}`}>
						<button className={`btn ${styles.button} ${buttonClass}`} type="submit">
							<span className="fa fa-search fa-lg"/>
						</button>
					</span>
				</div>
			</form>
		);
	}
}

Search.propTypes = {
	size: PropTypes.oneOf(['large', 'small']),
	inputClass: PropTypes.string,
	buttonClass: PropTypes.string,
	onSearchSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

Search.defaultProps = {
	placeholder: 'Search...'
};

export default Search;
