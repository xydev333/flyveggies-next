import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends React.Component {

    state = { pager: {} };

    componentWillMount() {
        // set page if items array isn't empty
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.currentPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const is_same = (this.props.items.length == prevProps.items.length) && this.props.items.every(function(element, index) {
            return element === prevProps.items[index]; 
        });

        // reset page if items array has changed
        if (!is_same) {
            this.setPage(this.props.currentPage);
        }
    }

    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page, pageSize);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({ pager: pager });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems, pager);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        // console.log(this.state.pager)

        return (
            <div className="pagination-area text-center">
                <Link href="#">
                    <a 
                        onClick={e => {e.preventDefault();this.setPage(pager.currentPage - 1)}}
                        className={`prev page-numbers ${pager.currentPage === 1 ? 'disabled' : ''}`}
                    >
                        <i className='bx bx-chevron-left'></i>
                    </a>
                </Link>

                {pager.pages.map((page, index) =>
                    <Link href="#" key={index}>
                        <a 
                            className={`page-numbers ${pager.currentPage === page ? 'current' : ''}`}
                            onClick={e => {e.preventDefault();this.setPage(page)}}
                        >{page}</a>
                    </Link>
                )}
                <Link href="#">
                    <a 
                        onClick={e => {e.preventDefault();this.setPage(pager.currentPage + 1)}}
                        className={`next page-numbers ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}
                    >
                        <i className='bx bx-chevron-right'></i>
                    </a>
                </Link>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

const mapStateToProps = (state)=>{
    return{
        currentPage: state.blogReducer.currentPage || 1,
    }
}
export default connect(
    mapStateToProps,
    null
)(Pagination);