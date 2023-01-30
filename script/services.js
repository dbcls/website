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
      url: '../json/services.json',
      dataType: 'json',
      async: true,
      success: function (data) {
        var elementArray = data;
        //column1に"Y"のあるrowをとってくる
        var publication_order = getOrder('other', '掲載');
        var symbolYList = elementArray.filter((YList) => {
          return YList[publication_order] === 'Y';
        });
        var element = '';

        function getOrder(type, target) {
          var order = 0;
          if (type === 'category') {
            for (var i = 0; i < elementArray.length; i++) {
              if (elementArray[1][i] === target) {
                order = i;
              }
            }
          } else if (type === 'other') {
            for (var i = 0; i < elementArray.length; i++) {
              if (elementArray[0][i] === target) {
                order = i;
              }
            }
          }
          return order;
        }

        var service_name_order = getOrder('other', 'services_name_en');
        var core_service_name_order = getOrder('other', 'services_name_ja');
        var keyword_ja_order = getOrder('other', 'explanation_ja');
        var keyword_en_order = getOrder('other', 'explanation_en');
        var url_order = getOrder('other', 'URL');

        var database_integration_order = getOrder(
          'category',
          'Database integration/データベース統合'
        );
        var materials_order = getOrder('category', 'Materials/教材・資料');
        var genome_order = getOrder('category', 'Genome/ゲノム');
        var gene_order = getOrder('category', 'Gene/遺伝子');
        var gene_expression_order = getOrder(
          'category',
          'Gene expression/遺伝子発現'
        );
        var NGS_order = getOrder('category', 'NGS');
        var disease_order = getOrder('category', 'Disease/疾患');
        var natural_language_processing_order = getOrder(
          'category',
          'Natural language processing/自然言語処理'
        );
        var SPARQL_order = getOrder('category', 'SPARQL Search/SPARQL検索');
        var RDF_creation_order = getOrder('category', 'RDF creation/RDF作成');

        var biologist_order = getOrder(
          'category',
          'Database user/データベース利用者'
        );
        var application_order = getOrder(
          'category',
          'Database application developer (REST API, SPARQL)/アプリケーション開発者 (REST API, SPARQL)'
        );
        var data_scientist_order = getOrder(
          'category',
          'Data scientist/大規模データ解析者 (一括DL)'
        );
        var provider_order = getOrder('category', 'Data provider/データ所有者');
        var image_order = getOrder('other', '画像');

        function getClassName(num) {
          var tagName = [];
          if (symbolYList[num][database_integration_order] === 'Y') {
            tagName.push('database-integration');
          }
          if (symbolYList[num][materials_order] === 'Y') {
            tagName.push('materials');
          }
          if (symbolYList[num][genome_order] === 'Y') {
            tagName.push('genome');
          }
          if (symbolYList[num][gene_order] === 'Y') {
            tagName.push('gene');
          }
          if (symbolYList[num][gene_expression_order] === 'Y') {
            tagName.push('gene-expression');
          }
          if (symbolYList[num][NGS_order] === 'Y') {
            tagName.push('NGS');
          }
          if (symbolYList[num][disease_order] === 'Y') {
            tagName.push('disease');
          }
          if (symbolYList[num][natural_language_processing_order] === 'Y') {
            tagName.push('natural-language-processing');
          }
          if (symbolYList[num][SPARQL_order] === 'Y') {
            tagName.push('SPARQL');
          }
          if (symbolYList[num][RDF_creation_order] === 'Y') {
            tagName.push('RDF-creation');
          }
          if (symbolYList[num][biologist_order] === 'Y') {
            tagName.push('biologist');
          }
          if (symbolYList[num][application_order] === 'Y') {
            tagName.push('application');
          }
          if (symbolYList[num][data_scientist_order] === 'Y') {
            tagName.push('data-scientist');
          }
          if (symbolYList[num][provider_order] === 'Y') {
            tagName.push('provider');
          }
          return tagName;
        }

        var tagMapping = {
          'database-integration': {
            ja: 'データベース統合',
            en: 'Database integration',
          },
          materials: {
            ja: '教材・資料',
            en: 'Materials',
          },
          genome: {
            ja: 'ゲノム',
            en: 'Genome',
          },
          gene: {
            ja: '遺伝子',
            en: 'Gene',
          },
          'gene-expression': {
            ja: '遺伝子発現',
            en: 'Gene expression',
          },
          NGS: {
            ja: 'NGS',
            en: 'NGS',
          },
          disease: {
            ja: '疾患',
            en: 'Disease',
          },
          'natural-language-processing': {
            ja: '自然言語処理',
            en: 'Natural language processing',
          },
          SPARQL: {
            ja: 'SPARQL検索',
            en: 'SPARQL Search',
          },
          'RDF-creation': {
            ja: 'RDF作成',
            en: 'RDF creation',
          },
          biologist: {
            ja: 'データベース利用者',
            en: 'Database user',
          },
          application: {
            ja: 'アプリケーション開発者',
            en: 'Database application developer',
          },
          'data-scientist': {
            ja: '大規模データ解析者',
            en: 'Data scientist',
          },
          provider: {
            ja: ' データ所有者',
            en: 'Data provider',
          },
        };

        //file名の取得
        for (var i = 0; i < symbolYList.length; i++) {
          var tagArray = getClassName(i);
          var tagName = tagArray.join(' ');

          function addTagLine(array, lang) {
            var categoryTag = '<div class="tag_wrapper">';
            if (lang === 'ja') {
              for (var j = 0; j < array.length; j++) {
                var category_name = array[j];
                let user = '';
                if (
                  category_name === 'biologist' ||
                  category_name === 'application' ||
                  category_name === 'data-scientist' ||
                  category_name === 'provider'
                ) {
                  user = 'user';
                }
                categoryTag +=
                  '<div class="service_category card ' +
                  user +
                  ' tag_element ' +
                  array[j] +
                  '">' +
                  tagMapping[category_name].ja +
                  '</div>';
              }
            } else if (lang === 'en') {
              for (var j = 0; j < array.length; j++) {
                var category_name = array[j];
                let user = '';
                if (
                  category_name === 'biologist' ||
                  category_name === 'application' ||
                  category_name === 'data-scientist' ||
                  category_name === 'provider'
                ) {
                  user = 'user';
                }
                categoryTag +=
                  '<div class="service_category card ' +
                  user +
                  ' tag_element ' +
                  array[j] +
                  '">' +
                  tagMapping[category_name].en +
                  '</div>';
              }
            }
            categoryTag += '</div>';
            return categoryTag;
          }

          var service_name_hash = symbolYList[i][service_name_order];
          service_name_hash = service_name_hash.replace(/ /g, '_');
          if (service_name_hash.indexOf('/') !== -1) {
            service_name_hash = encodeURIComponent(service_name_hash);
          }

          var lang = $('html').attr('lang');
          if (lang === 'ja') {
            element +=
              '<article class="article__section contener-type-box mix ' +
              tagName +
              '">' +
              '<div id="repos_image0" class="repos_image">' +
              '<a href="' +
              symbolYList[i][url_order] +
              '" target="_blank">' +
              '<img src="./img/service_assets/' +
              symbolYList[i][image_order] +
              '" alt="' +
              symbolYList[i][service_name_order] +
              '" class="object-fit-img img_services" /></a></div>' +
              '<div id="repos_name' +
              i +
              '" class="repos_name">' +
              '<p class="name name_ja" id="' +
              symbolYList[i][service_name_order] +
              '">' +
              symbolYList[i][core_service_name_order] +
              '</p>' +
              '<div class="keyword"><p>' +
              symbolYList[i][keyword_ja_order] +
              '</p></div>' +
              addTagLine(tagArray, 'ja') +
              '<div class="btn-box">' +
              '<a class="page_btn more_btn" target="_blank" href="#' +
              service_name_hash +
              '">' +
              '詳細' +
              '</a>' +
              '<a href="' +
              symbolYList[i][url_order] +
              '" class="page_btn access_btn" target="_blank">アクセス</a>' +
              '</div></div>';
          } else if (lang === 'en') {
            element +=
              '<article class="article__section contener-type-box mix ' +
              tagName +
              '">' +
              '<div id="repos_image0" class="repos_image">' +
              '<a href="' +
              symbolYList[i][url_order] +
              '" target="_blank">' +
              '<img src="./img/service_assets/' +
              symbolYList[i][image_order] +
              '" alt="' +
              symbolYList[i][service_name_order] +
              '" class="object-fit-img img_services" /></a></div>' +
              '<div id="repos_name' +
              i +
              '" class="repos_name">' +
              '<p class="name name_en" id="' +
              symbolYList[i][service_name_order] +
              '">' +
              symbolYList[i][service_name_order] +
              '</p>' +
              '<div class="keyword"><p>' +
              symbolYList[i][keyword_en_order] +
              '</p></div>' +
              addTagLine(tagArray, 'en') +
              '<div class="btn-box">' +
              '<a class="page_btn more_btn" target="_blank" href="#' +
              service_name_hash +
              '">' +
              'more' +
              '</a>' +
              '<a href="' +
              symbolYList[i][url_order] +
              '" class="page_btn access_btn" target="_blank">Access</a>' +
              '</div></div>';
          }

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
              const buttonName = e.target.dataset.toggle.substr(1);
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
      var publication_order = getOrder('掲載');
      var services_array_Y = services_array.filter((services_array) => {
        return services_array[publication_order] === 'Y';
      });

      function getOrder(target) {
        var order = 0;
        for (var i = 0; i < services_array.length; i++) {
          if (services_array[0][i] === target) {
            order = i;
          }
        }
        return order;
      }
      var service_name_order = getOrder('services_name_en');
      var core_service_name_order = getOrder('services_name_ja');

      function checkCore(name) {
        var coreName = '';
        var sameTypeServices = [];
        for (var i = 0; i < services_array_Y.length; i++) {
          var service = services_array_Y[i][service_name_order];
          var core_service = services_array_Y[i][core_service_name_order];
          name = name.replace(/_/g, ' ');
          if (service === name) {
            coreName = services_array_Y[i][core_service_name_order];
          }
        }
        for (var i = 0; i < services_array_Y.length; i++) {
          var service = services_array_Y[i][service_name_order];
          var core_service = services_array_Y[i][core_service_name_order];
          if (core_service === coreName) {
            sameTypeServices.push(services_array_Y[i][service_name_order]);
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
