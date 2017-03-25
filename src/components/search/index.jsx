import React, {PropTypes} from 'react';
import classnames from 'classnames';

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
		const {inputButton, size, placeholder} = this.props;

		const inputGroup = classnames({
			'input-group': inputButton,
			'input-group-lg': inputButton && size === 'large'
		});

		const inputClass = classnames(this.props.inputClass, {
			'input-lg': !inputButton && size === 'large'
		});

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
					{inputButton}
				</div>
			</form>
		);
	}
}

Search.propTypes = {
	size: PropTypes.oneOf(['large', 'small']).isRequired,
	inputButton: PropTypes.element,
	inputClass: PropTypes.string,
	onSearchSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

Search.defaultProps = {
	inputButton: null,
	inputClass: '',
	placeholder: 'Search...'
};

export default Search;
