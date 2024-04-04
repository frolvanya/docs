"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5021],{47776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),a=n(11151);const i={sidebar_position:2},r="Collections",o={id:"sdk/rust/contract-structure/collections",title:"Collections",description:"When deciding on data structures to use for the data of the application, it is important to minimize the amount of data read and written to storage but also the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales and migrating the state to the new data structures will come at a cost.",source:"@site/../docs/sdk/rust/contract-structure/collections.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/collections",permalink:"/sdk/rust/contract-structure/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/collections.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1702155614e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"near_bindgen",permalink:"/sdk/rust/contract-structure/near-bindgen"},next:{title:"Collections Nesting",permalink:"/sdk/rust/contract-structure/nesting"}},d={},l=[{value:"In-memory <code>HashMap</code> vs persistent <code>UnorderedMap</code>",id:"in-memory-hashmap-vs-persistent-unorderedmap",level:2},{value:"Error prone patterns",id:"error-prone-patterns",level:2},{value:"Pagination with persistent collections",id:"pagination-with-persistent-collections",level:2},{value:"<code>LookupMap</code> vs <code>UnorderedMap</code>",id:"lookupmap-vs-unorderedmap",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Performance",id:"performance",level:3},{value:"Storage space",id:"storage-space",level:3},{value:"<code>LazyOption</code>",id:"lazyoption",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"collections",children:"Collections"}),"\n",(0,s.jsx)(t.p,{children:"When deciding on data structures to use for the data of the application, it is important to minimize the amount of data read and written to storage but also the amount of data serialized and deserialized to minimize the cost of transactions. It is important to understand the tradeoffs of data structures in your smart contract because it can become a bottleneck as the application scales and migrating the state to the new data structures will come at a cost."}),"\n",(0,s.jsxs)(t.p,{children:["The collections within ",(0,s.jsx)(t.code,{children:"near-sdk"})," are designed to split the data into chunks and defer reading and writing to the store until needed. These data structures will handle the low-level storage interactions and aim to have a similar API to the ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/collections/index.html",children:(0,s.jsx)(t.code,{children:"std::collections"})}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"near_sdk::collections"})," will be moving to ",(0,s.jsx)(t.code,{children:"near_sdk::store"})," and have updated APIs. If you would like to access these updated structures as they are being implemented, enable the ",(0,s.jsx)(t.code,{children:"unstable"})," feature on ",(0,s.jsx)(t.code,{children:"near-sdk"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["It is important to keep in mind that when using ",(0,s.jsx)(t.code,{children:"std::collections"}),", that each time state is loaded, all entries in the data structure will be read eagerly from storage and deserialized. This will come at a large cost for any non-trivial amount of data, so to minimize the amount of gas used the SDK collections should be used in most cases."]}),"\n",(0,s.jsxs)(t.p,{children:["The most up to date collections and their documentation can be found ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html",children:"in the rust docs"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The following data structures that exist in the SDK are as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"SDK collection"}),(0,s.jsxs)(t.th,{children:[(0,s.jsx)(t.code,{children:"std"}),"\xa0equivalent"]}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LazyOption<T>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Option<T>"})}),(0,s.jsxs)(t.td,{children:["Optional value in storage. This value will only be read from storage when interacted with. This value will be ",(0,s.jsx)(t.code,{children:"Some<T>"})," when the value is saved in storage, and ",(0,s.jsx)(t.code,{children:"None"})," if the value at the prefix does not exist."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Vector<T>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Vec<T>"})}),(0,s.jsx)(t.td,{children:"A growable array type. The values are sharded in memory and can be used for iterable and indexable values that are dynamically sized."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["LookupMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["HashMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsx)(t.td,{children:"This structure behaves as a thin wrapper around the key-value storage available to contracts. This structure does not contain any metadata about the elements in the map, so it is not iterable."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["UnorderedMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["HashMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsxs)(t.td,{children:["Similar to ",(0,s.jsx)(t.code,{children:"LookupMap"}),", except that it stores additional data to be able to iterate through elements in the data structure."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["TreeMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("code",{children:["BTreeMap",(0,s.jsx)(t.code,{children:"<K,&nbsp;V>"})]})}),(0,s.jsxs)(t.td,{children:["An ordered equivalent of ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),". The underlying implementation is based on an ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL tree"}),". This structure should be used when a consistent order is needed or accessing the min/max keys is needed."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LookupSet<T>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"HashSet<T>"})}),(0,s.jsxs)(t.td,{children:["A set, which is similar to ",(0,s.jsx)(t.code,{children:"LookupMap"})," but without storing values, can be used for checking the unique existence of values. This structure is not iterable and can only be used for lookups."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UnorderedSet<T>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"HashSet<T>"})}),(0,s.jsxs)(t.td,{children:["An iterable equivalent of ",(0,s.jsx)(t.code,{children:"LookupSet"})," which stores additional metadata for the elements contained in the set."]})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"in-memory-hashmap-vs-persistent-unorderedmap",children:["In-memory ",(0,s.jsx)(t.code,{children:"HashMap"})," vs persistent ",(0,s.jsx)(t.code,{children:"UnorderedMap"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HashMap"})," keeps all data in memory. To access it, the contract needs to deserialize the whole map."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," keeps data in persistent storage. To access an element, you only need to deserialize this element."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"HashMap"})," in case:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Need to iterate over all elements in the collection ",(0,s.jsx)(t.strong,{children:"in one function call"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"The number of elements is small or fixed, e.g. less than 10."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"UnorderedMap"})," in case:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Need to access a limited subset of the collection, e.g. one or two elements per call."}),"\n",(0,s.jsx)(t.li,{children:"Can't fit the collection into memory."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The reason is ",(0,s.jsx)(t.code,{children:"HashMap"})," deserializes (and serializes) the entire collection in one storage operation.\nAccessing the entire collection is cheaper in gas than accessing all elements through ",(0,s.jsx)(t.code,{children:"N"})," storage operations."]}),"\n",(0,s.jsxs)(t.p,{children:["Example of ",(0,s.jsx)(t.code,{children:"HashMap"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'/// Using Default initialization.\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Contract {\n    pub status_updates: HashMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(env::predecessor_account_id(), status);\n        assert!(self.status_updates.len() <= 10, "Too many messages");\n    }\n\n    pub fn clear(&mut self) {\n        // Effectively iterating through all removing them.\n        self.status_updates.clear();\n    }\n\n    pub fn get_all_updates(self) -> HashMap<AccountId, String> {\n        self.status_updates\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Example of ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new() -> Self {\n        // Initializing `status_updates` with unique key prefix.\n        Self {\n            status_updates: UnorderedMap::new(b\"s\".to_vec()),\n        }\n    }\n\n    pub fn set_status(&mut self, status: String) {\n        self.status_updates.insert(&env::predecessor_account_id(), &status);\n        // Note, don't need to check size, since `UnorderedMap` doesn't store all data in memory.\n    }\n\n    pub fn delete_status(&mut self) {\n        self.status_updates.remove(&env::predecessor_account_id());\n    }\n\n    pub fn get_status(&self, account_id: AccountId) -> Option<String> {\n        self.status_updates.get(&account_id)\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"error-prone-patterns",children:"Error prone patterns"}),"\n",(0,s.jsx)(t.p,{children:"Because the values are not kept in memory and are lazily loaded from storage, it's important to make sure if a collection is replaced or removed, that the storage is cleared. In addition, it is important that if the collection is modified, the collection itself is updated in state because most collections will store some metadata."}),"\n",(0,s.jsx)(t.p,{children:"Some error-prone patterns to avoid that cannot be restricted at the type level are:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use near_sdk::store::UnorderedMap;\n\nlet mut m = UnorderedMap::<u8, String>::new(b"m");\nm.insert(1, "test".to_string());\nassert_eq!(m.len(), 1);\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 1: Should not replace any collections without clearing state, this will reset any\n// metadata, such as the number of elements, leading to bugs. If you replace the collection\n// with something with a different prefix, it will be functional, but you will lose any\n// previous data and the old values will not be removed from storage.\nm = UnorderedMap::new(b"m");\nassert!(m.is_empty());\nassert_eq!(m.get(&1), Some(&"test".to_string()));\n\n// Bug 2: Should not use the same prefix as another collection\n// or there will be unexpected side effects.\nlet m2 = UnorderedMap::<u8, String>::new(b"m");\nassert!(m2.is_empty());\nassert_eq!(m2.get(&1), Some(&"test".to_string()));\n\n// Bug 3: forgetting to save the collection in storage. When the collection is attached to\n// the contract state (`self` in `#[near_bindgen]`) this will be done automatically, but if\n// interacting with storage manually or working with nested collections, this is relevant.\nuse near_sdk::store::Vector;\n\n// Simulate roughly what happens during a function call that initializes state.\n{\n    let v = Vector::<u8>::new(b"v");\n    near_sdk::env::state_write(&v);\n}\n\n// Simulate what happens during a function call that just modifies the collection\n// but does not store the collection itself.\n{\n    let mut v: Vector<u8> = near_sdk::env::state_read().unwrap();\n    v.push(1);\n    // The bug is here that the collection itself if not written back\n}\n\nlet v: Vector<u8> = near_sdk::env::state_read().unwrap();\n// This will report as if the collection is empty, even though the element exists\nassert!(v.get(0).is_none());\nassert!(\n    near_sdk::env::storage_read(&[b"v".as_slice(), &0u32.to_le_bytes()].concat()).is_some()\n);\n\n// Bug 4 (only relevant for `near_sdk::store`): These collections will cache writes as well\n// as reads, and the writes are performed on [`Drop`](https://doc.rust-lang.org/std/ops/trait.Drop.html)\n// so if the collection is kept in static memory or something like `std::mem::forget` is used,\n// the changes will not be persisted.\nuse near_sdk::store::LookupSet;\n\nlet mut m: LookupSet<u8> = LookupSet::new(b"l");\nm.insert(1);\nassert!(m.contains(&1));\n\n// This would be the fix, manually flushing the intermediate changes to storage.\n// m.flush();\nstd::mem::forget(m);\n\nm = LookupSet::new(b"l");\nassert!(!m.contains(&1));\n'})}),"\n",(0,s.jsx)(t.h2,{id:"pagination-with-persistent-collections",children:"Pagination with persistent collections"}),"\n",(0,s.jsxs)(t.p,{children:["Persistent collections such as ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),", ",(0,s.jsx)(t.code,{children:"UnorderedSet"})," and ",(0,s.jsx)(t.code,{children:"Vector"})," may\ncontain more elements than the amount of gas available to read them all.\nIn order to expose them all through view calls, we can use pagination."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be done using iterators with ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/iter/struct.Skip.html",children:(0,s.jsx)(t.code,{children:"Skip"})})," and ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/iter/struct.Take.html",children:(0,s.jsx)(t.code,{children:"Take"})}),". This will only load elements from storage within the range."]}),"\n",(0,s.jsxs)(t.p,{children:["Example of pagination for ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub status_updates: UnorderedMap<AccountId, String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    /// Retrieves multiple elements from the `UnorderedMap`.\n    /// - `from_index` is the index to start from.\n    /// - `limit` is the maximum number of elements to return.\n    pub fn get_updates(&self, from_index: usize, limit: usize) -> Vec<(AccountId, String)> {\n        self.status_updates\n            .iter()\n            .skip(from_index)\n            .take(limit)\n            .collect()\n    }\n}\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"lookupmap-vs-unorderedmap",children:[(0,s.jsx)(t.code,{children:"LookupMap"})," vs ",(0,s.jsx)(t.code,{children:"UnorderedMap"})]}),"\n",(0,s.jsx)(t.h3,{id:"functionality",children:"Functionality"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," supports iteration over keys and values, and also supports pagination. Internally, it has the following structures:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"a map from a key to an index"}),"\n",(0,s.jsx)(t.li,{children:"a vector of keys"}),"\n",(0,s.jsx)(t.li,{children:"a vector of values"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," only has a map from a key to a value. Without a vector of keys, it doesn't have the ability to iterate over keys."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," has a better performance and stores less data compared to ",(0,s.jsx)(t.code,{children:"UnorderedMap"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," requires ",(0,s.jsx)(t.code,{children:"2"})," storage reads to get the value and ",(0,s.jsx)(t.code,{children:"3"})," storage writes to insert a new entry."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," requires only one storage read to get the value and only one storage write to store it."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"storage-space",children:"Storage space"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," requires more storage for an entry compared to a ",(0,s.jsx)(t.code,{children:"LookupMap"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnorderedMap"})," stores the key twice (once in the first map and once in the vector of keys) and value once. It also has a higher constant for storing the length of vectors and prefixes."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"LookupMap"})," stores key and value once."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"lazyoption",children:(0,s.jsx)(t.code,{children:"LazyOption"})}),"\n",(0,s.jsx)(t.p,{children:"It's a type of persistent collection that only stores a single value.\nThe goal is to prevent a contract from deserializing the given value until it's needed.\nAn example can be a large blob of metadata that is only needed when it's requested in a view call,\nbut not needed for the majority of contract operations."}),"\n",(0,s.jsxs)(t.p,{children:["It acts like an ",(0,s.jsx)(t.code,{children:"Option"})," that can either hold a value or not and also requires a unique prefix (a key in this case)\nlike other persistent collections."]}),"\n",(0,s.jsxs)(t.p,{children:["Compared to other collections, ",(0,s.jsx)(t.code,{children:"LazyOption"})," only allows you to initialize the value during initialization."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub metadata: LazyOption<Metadata>,\n}\n\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Metadata {\n    data: String,\n    image: Base64Vec,\n    blobs: Vec<String>,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(metadata: Metadata) -> Self {\n        Self {\n            metadata: LazyOption::new(b"m", Some(metadata)),\n        }\n    }\n\n    pub fn get_metadata(&self) -> Metadata {\n        // `.get()` reads and deserializes the value from the storage. \n        self.metadata.get().unwrap()\n    }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);