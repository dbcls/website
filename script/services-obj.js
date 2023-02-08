var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
  var url = window.location;
  var path = url.href.split('/');
  var file_name = path.pop();
  if (file_name.match(/#[\w_]/)) {
    file_name = file_name.replace('services.html#', '');
    file_name = file_name.replace('services-en.html#', '');
    $('.facet_section').addClass('off');
    displayRepos(file_name);
  } else {
    servicesFrontDisplay();
  }
  function servicesFrontDisplay() {
    $.ajax({
      url: '../json/services-object.json',
      dataType: 'json',
      async: true,
      success: function (data) {
        var elementArray = data;
        var symbolYList = elementArray.filter((YList) => {
          return YList['掲載'] === true;
        });
        var element = '';

        const tagMapping = {
          'database-integration': {
            id: 'Category_1',
            ja: 'データベース統合',
            en: 'Database integration',
          },
          'materials': {
            id: 'Category_2',
            ja: '教材・資料',
            en: 'Materials',
          },
          'genome': {
            id: 'Category_3',
            ja: 'ゲノム',
            en: 'Genome',
          },
          'gene': {
            id: 'Category_4',
            ja: '遺伝子',
            en: 'Gene',
          },
          'gene-expression': {
            id: 'Category_5',
            ja: '遺伝子発現',
            en: 'Gene expression',
          },
          'NGS': {
            id: 'Category_6',
            ja: 'NGS',
            en: 'NGS',
          },
          'disease': {
            id: 'Category_7',
            ja: '疾患',
            en: 'Disease',
          },
          'natural-language-processing': {
            id: 'Category_8',
            ja: '自然言語処理',
            en: 'Natural language processing',
          },
          'SPARQL': {
            id: 'Category_9',
            ja: 'SPARQL検索',
            en: 'SPARQL Search',
          },
          'RDF-creation': {
            id: 'Category_10',
            ja: 'RDF作成',
            en: 'RDF creation',
          },
          'biologist': {
            id: 'User_1',
            ja: 'データベース利用者',
            en: 'Database user',
          },
          'application': {
            id: 'User_2',
            ja: 'アプリケーション開発者',
            en: 'Database application developer',
          },
          'data-scientist': {
            id: 'User_3',
            ja: '大規模データ解析者',
            en: 'Data scientist',
          },
          'provider': {
            id: 'User_4',
            ja: ' データ所有者',
            en: 'Data provider',
          },
        };

        function getClassName(num) {
          var tagName = [];
          for (const [key, value] of Object.entries(tagMapping)) {
            if (symbolYList[num][value.id]) {
              tagName.push(key);
            }
          }
          return tagName;
        }

        //file名の取得
        for (const i in symbolYList) {
          var tagArray = getClassName(i);
          var tagName = tagArray.join(' ');

          function addTagLine(array, lang) {
            var categoryTag = '<div class="tag_wrapper">';
            const addCategory = (lang) => {
              for (const j in array) {
                var category_name = array[j];
                let user = '';
                if (
                  [
                    'biologist',
                    'application',
                    'data-scientist',
                    'provider',
                  ].includes(category_name)
                ) {
                  user = 'user';
                }
                categoryTag +=
                  '<div class="service_category card ' +
                  user +
                  ' tag_element ' +
                  array[j] +
                  '">' +
                  tagMapping[category_name][lang] +
                  '</div>';
              }
            };
            lang === 'ja' ? addCategory('ja') : addCategory('en');
            categoryTag += '</div>';
            return categoryTag;
          }

          var service_name_hash = symbolYList[i]['services_name_en'];
          service_name_hash = service_name_hash.replace(/ /g, '_');
          if (service_name_hash.indexOf('/') !== -1) {
            service_name_hash = encodeURIComponent(service_name_hash);
          }

          var lang = $('html').attr('lang');
          const addHTMLElements = (lang) => {
            const detailText = lang === 'ja' ? '詳細' : 'more';
            const accessText = lang === 'ja' ? 'アクセス' : 'Access';
            return (
              '<article class="article__section contener-type-box mix ' +
              tagName +
              '">' +
              '<div id="repos_image0" class="repos_image">' +
              '<a href="' +
              symbolYList[i]['URL'] +
              '" target="_blank">' +
              '<img src="./img/service_assets/' +
              symbolYList[i]['画像'] +
              '" alt="' +
              symbolYList[i]['services_name_en'] +
              '" class="object-fit-img img_services" /></a></div>' +
              '<div id="repos_name' +
              i +
              '" class="repos_name">' +
              `<p class="name name_${lang}" id="` +
              symbolYList[i][`services_name_${lang}`] +
              '">' +
              symbolYList[i][`services_name_${lang}`] +
              '</p>' +
              '<div class="keyword"><p>' +
              symbolYList[i][`explanation_${lang}`] +
              '</p></div>' +
              addTagLine(tagArray, lang) +
              '<div class="btn-box">' +
              '<a class="page_btn more_btn" target="_blank" href="#' +
              service_name_hash +
              '">' +
              detailText +
              '</a>' +
              '<a href="' +
              symbolYList[i]['URL'] +
              `" class="page_btn access_btn" target="_blank">${accessText}</a>` +
              '</div></div>'
            );
          };
          element +=
            lang === 'ja' ? addHTMLElements('ja') : addHTMLElements('en');
          element += '</article>';
        }
        $('#service_list').append(element);
        var containerEl = document.querySelector('.service__wrapper');
        mixitup(containerEl, {
          multifilter: {
            enable: true,
          },
          debug: {
            enable: true,
          },
          callbacks: {
            onMixClick: function (state, originalEvent) {
              const e = originalEvent;
              const isCategory = e.target.classList.contains('category');
              const buttonType = () => (isCategory ? 'category' : 'user');
              const isAllButton = e.target.classList.contains('all');
              const isActiveButton = e.target.classList.contains(
                'mixitup-control-active'
              );
              const currentUrl = new URL(window.location.href);
              const searchParams = new URLSearchParams(currentUrl.search);
              const buttonName = e.target.dataset.toggle?.substr(1);
              const urlParamsHandler = (paramKey) => {
                const paramValue = searchParams.get(paramKey);
                const paramValueArray = () => {
                  return paramValue !== null ? paramValue.split(',') : [];
                };
                const addParamValue = () => {
                  let newParamValue = paramValue + ',' + buttonName;
                  searchParams.set(paramKey, newParamValue);
                };
                const deleteParamValue = () => {
                  const copy = [...paramValueArray()];
                  const targetIndex = copy.indexOf(buttonName);
                  copy.splice(targetIndex, 1);
                  searchParams.set(paramKey, copy.toString());
                };
                if (isAllButton) {
                  searchParams.delete(paramKey);
                } else {
                  if (paramValueArray().length === 0) {
                    searchParams.append(paramKey, buttonName);
                  } else {
                    if (paramValueArray().includes(buttonName)) {
                      if (isActiveButton) {
                        paramValueArray().length === 1
                          ? searchParams.delete(paramKey)
                          : deleteParamValue();
                      }
                    } else {
                      addParamValue();
                    }
                  }
                }
                currentUrl.search = searchParams.toString();
                let newUrl = currentUrl.href;
                window.history.pushState({}, '', newUrl);
              };
              urlParamsHandler(buttonType());
            },
            onMixStart: function (state, futureState) {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
              const currentUrl = new URL(window.location.href);
              const searchParams = new URLSearchParams(currentUrl.search);
              const hasCategory = searchParams.has('category');
              const hasUser = searchParams.has('user');
              const allAllButtons = '[data-filter=".mix"]';
              $(allAllButtons).removeClass('active');
              if (currentUrl.search === '') {
                $(allAllButtons).addClass('active');
              } else if (!hasCategory && hasUser) {
                $('button.category.all').addClass('active');
              } else if (hasCategory && !hasUser) {
                $('button.user.all').addClass('active');
              }
            },
          },
        });
        // URL parameter を応じてユーザボタンを押す
        function clickButtonsByUrlParams() {
          const currentUrl = new URL(window.location.href);
          const searchParams = new URLSearchParams(currentUrl.search);
          for (const values of searchParams.values()) {
            for (const value of values.split(',')) {
              var selector = 'button.tag_element.' + value;
              $(selector).click();
            }
          }
        }
        clickButtonsByUrlParams();
      },
    });
  }

  //詳細ボタンクリックでREADME表示
  // $(document).on('click', '.more_btn', function () {
  //   var service_name = $(this)
  //     .parent()
  //     .siblings(".name")
  //     .attr("id");
  //   service_name = service_name.replace(/ /g, '_')
  //   if(service_name.indexOf('/') !== -1) {
  //     service_name = encodeURIComponent(service_name)
  //   }
  //   location.hash = service_name
  // })

  //リポジトリ個別ページ
  function displayRepos(repos_name) {
    $('title').text(
      `${decodeURIComponent(repos_name.replace(/\_/g, ' '))} | DBCLS`
    );

    $('html,body').scrollTop(0);
    var md_data = '';
    $.ajax({
      type: 'get',
      url: '../json/services.json',
      dataType: 'json',
    }).done(function (data) {
      var services_array = data;
      var services_array_Y = services_array.filter((services_array) => {
        return services_array['掲載'] === true;
      });

      function checkCore(name) {
        var coreName = '';
        var sameTypeServices = [];
        for (var i = 0; i < services_array_Y.length; i++) {
          var service = services_array_Y[i]['services_name_en'];
          var core_service = services_array_Y[i]['services_name_ja'];
          name = name.replace(/_/g, ' ');
          if (service === name) {
            coreName = services_array_Y[i]['services_name_ja'];
          }
        }
        for (var i = 0; i < services_array_Y.length; i++) {
          var service = services_array_Y[i]['services_name_en'];
          var core_service = services_array_Y[i]['services_name_ja'];
          if (core_service === coreName) {
            sameTypeServices.push(services_array_Y[i]['services_name_en']);
          }
        }
        return sameTypeServices;
      }

      repos_name = decodeURIComponent(repos_name);
      var clicked_service = repos_name.replace('_ja', '');
      clicked_service = clicked_service.replace('_en', '');
      var md_array = checkCore(clicked_service);
      var md_array_modified = [];

      md_array.forEach(function (data) {
        data = data.replace(/ /g, '_');
        data = data.replace(/\//g, '_');
        if (repos_name.slice(-3) === '_ja') {
          data = data + '_ja';
        } else if (repos_name.slice(-3) === '_en') {
          data = data + '_en';
        }
        md_array_modified.push(data);
      });
      $('.service__wrapper').empty();

      md_array_modified.map((data) => {
        var url = window.location;
        var path = url.href.split('/');
        var file_name = path.pop();
        var lang = '';
        if (file_name.match(/services-en\.html/)) {
          lang = 'en';
        } else {
          lang = 'ja';
        }
        var repos_name = data + '_' + lang;
        display_description(repos_name);
      });

      function display_description(repos_name) {
        $.ajax({
          type: 'get',
          url: './services/' + repos_name + '.md',
        }).done(function (result) {
          var arranged_data = '';
          arranged_data = marked(result);
          $('.service__wrapper').append(
            $('<div/>')
              .attr({
                class: 'markdown-body',
              })
              .html(arranged_data)
          );
        });
      }
    });
  }

  //ハッシュ値が変わった時の画面遷移
  window.addEventListener(
    'hashchange',
    function () {
      if (location.hash === '') {
        $('.facet_section').removeClass('off');
        $('.service__wrapper').empty();
        var containerEl = document.querySelector('.service__wrapper');
        var mixer = mixitup(containerEl, {
          multifilter: {
            enable: true,
          },
          debug: {
            enable: true,
          },
        });
        mixer.destroy();
        servicesFrontDisplay();
      } else {
        var service__title = location.hash.slice(1);
        $('.facet_section').addClass('off');
        displayRepos(service__title);
      }
    },
    false
  );
});
