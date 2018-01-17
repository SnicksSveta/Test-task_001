import jQuery from 'jquery';
import { Model } from '../model';
import { buildSearchResults } from './searchResults';

function getPaginationHtml() {
  // const pagesCount = Model.pagesCount;
  // const currentPage = Model.currentPage;
  const { currentPage, pagesCount } = Model;

  const prevButton = `
<li class="js-btn-prev ${currentPage === 0 ? 'disabled' : ''}">
  <a href="#">
      <span class="sprite sprite-arrow-left-icon"></span>
  </a>
</li>
`;
  const nextButton = `
<li class="js-btn-next ${currentPage === pagesCount - 1 ? 'disabled' : ''}">
    <a href="#">
        <span class="sprite sprite-arrow-right-icon"></span>
    </a>
</li>
`;
  const paginationHtml = [...new Array(pagesCount)] // spread
    .map(function(v, index) {
      return `
<li class="js-btn-page ${currentPage === index ? 'active' : ''}">
    <a href="#">${index + 1}</a>
</li>`;
    })
    .join('');

  return `${prevButton}${paginationHtml}${nextButton}`;
}

function attachEvents() {
  const prevButton = jQuery('.search-pagination .js-btn-prev a');
  const nextButton = jQuery('.search-pagination .js-btn-next a');
  const pageButtons = jQuery('.search-pagination .js-btn-page a');

  prevButton.on('click', function(e) {
    e.preventDefault();

    if (Model.currentPage > 0) {
      changePage(Model.currentPage - 1);
    }
  });

  nextButton.on('click', function(e) {
    e.preventDefault();

    if (Model.currentPage < Model.pagesCount - 1) {
      changePage(Model.currentPage + 1);
    }
  });

  pageButtons.each(function(index, elem) {
    jQuery(elem).on('click', function(e) {
      e.preventDefault();

      if (index !== Model.currentPage) {
        changePage(index);
      }
    });
  });
}

function buildPagination() {
  const container = jQuery('.search-pagination');

  container.html(getPaginationHtml());

  attachEvents();
}

function changePage(page) {
  Model.currentPage = page;

  buildPagination();
  buildSearchResults();
}

buildPagination();
buildSearchResults();
