import jQuery from 'jquery';
import { Model } from '../model';

function getSearchResultHtml() {
  const { items } = Model;

  return items
    .map(function(item) {
      return `
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <div class="thumbnail_top">
                    <a href="">
                        <span class="photos">
                            <span class="sprite sprite-photo-icon"></span>
                            <span class="count">${item.photosCount}</span>
                        </span>
                        <span class="top ${
                          item.isInTop ? 'active' : ''
                        }">Топ</span>
                        <img src="${item.photoUrl}" alt="...">
                    </a>
                    <p>
                        <a href="#" class="">
                        ${
                          item.isFavorite
                            ? '<span class="sprite sprite-star-pull"></span> В избранных'
                            : '<span class="sprite sprite-star-empty"></span> Избранное'
                        }
                        </a>
                      <a href="#" class="mail_link">
                        <span class="sprite sprite-mail-icon"></span>Написать
                      </a>
                    </p>
                </div>
                <div class="caption">
                    <h3>${item.name}, ${item.age}
                        <span class="online ${
                          item.isOnline ? 'active' : ''
                        }"></span>
                    </h3>
                    <p>${item.city}</p>
                </div>
            </div>
        </div>
      `;
    })
    .join('');
}

function buildSearchResults() {
  const container = jQuery('.js-items-container');

  container.html(getSearchResultHtml());
}

buildSearchResults();
